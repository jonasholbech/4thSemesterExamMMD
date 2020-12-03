import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { editUser } from "../../jsModules/displayFunctions/displayEditForm";
import { resetSubmenu } from "../../jsModules/displayFunctions/subMenuNavigation";
import { areYouSure } from "../../jsModules/displayFunctions/mainMenuNavigation";
import {
  openMenu,
  delegation,
  searchUsers,
  closeSearch,
  resetFilterNav,
} from "../../jsModules/displayFunctions/subMenuNavigation";
import { newUser } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { addTask } from "../planner/modules/mobNavigation";

export default function SubMenu(props) {
  console.log("navigation || SubMenu.js | SubMenu()");
  const tool = props.tool;
  const endpoint = props.endpoint;

  function removeDelete() {
    console.log("navigation || SubMenu.js | removeDelete()");
    document.querySelectorAll(".modal-wrapper").forEach((modal) => {
      modal.classList.add("hide");
    });
  }

  const person = document.querySelector(".Person");
  /* const isProfileShown = */
  /*   person != (undefined && null) ? (person.classList.contains("hide") ? false : true) : console.log("nothing"); */
  const isPrivateShown = document.querySelector(".Person");

  return (
    <nav className="SubMenu hide">
      <div
        className="menuIcon"
        onClick={() => {
          openMenu();
          resetFilterNav();
          tool === "planner" ? resetSubmenu() : openMenu();
        }}>
        <MenuRoundedIcon />
      </div>
      <div
        className="menuBack hide"
        onClick={() => {
          delegation(tool);
          removeDelete();
          props.setViewingProfile(false);
          props.setisUSerProfile(false);
        }}>
        <ArrowBackIosRoundedIcon />
      </div>
      <div
        className={
          props.level === "Administrator" || props.isUSerProfile
            ? "float-btn"
            : props.level !== "Administrator" && props.viewingProfile
            ? "float-btn hiddenFromUser"
            : "float-btn"
        }>
        <div
          className="menuSearch"
          onClick={() => {
            searchUsers(props.tool);
          }}>
          {props.tool === "admin" ? <SearchRoundedIcon /> : <SearchRoundedIcon />}
        </div>
        <div
          className="menuEdit hide"
          onClick={(e) => {
            editUser();
            removeDelete();
            props.editProfile(props.id);
          }}>
          <EditRoundedIcon />
        </div>
        <div
          className="menuClose hide"
          onClick={() => {
            closeSearch(props.tool);
            props.setChosenCategory("");
            props.setChosenEmployee("");
          }}>
          <CloseRoundedIcon />
        </div>
      </div>
      <div
        className={props.level === "Administrator" ? "newUserIcon" : "newUserIcon hiddenFromUser"}
        onClick={() => {
          newUser();
        }}>
        <PersonAddRoundedIcon />
      </div>
      <div
        className={props.level === "Administrator" ? "menuDelete hide" : "menuDelete hide hiddenFromUser"}
        onClick={() => {
          areYouSure();
          props.setSystemPart("admin");
        }}>
        <DeleteRoundedIcon />
      </div>
      <div className="menuAddTask hide" onClick={addTask}>
        <AddRoundedIcon />
      </div>
    </nav>
  );
}
