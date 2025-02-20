import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { editUser, setUpForm } from "../../../jsModules/displayFunctions/displayEditForm";
import { GSAP_removeOpacity } from "../../../jsModules/displayFunctions/gsap";
export default function Person(props) {
  //console.log("administration/viewProfile || Person.js | Person()");
  return (
    <article className="Person userCard">
      <img src={props.image} alt={props.name} />
      <div
        className="flex-wrapper"
        onClick={() => {
          editUser();
          props.editProfile(props.id);
          GSAP_removeOpacity(".UserForm");
          setUpForm();
        }}>
        <h1 className="profile name">{props.name}</h1>
        <div className={props.level === "Administrator" || props.isUSerProfile ? "" : "hiddenFromUser"}>
          <EditRoundedIcon />
        </div>
      </div>
    </article>
  );
}
