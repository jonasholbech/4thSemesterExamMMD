import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { editUser, setUpForm } from "../../jsModules/displayFunctions/displayEditForm";
import { resetSubmenu } from "../../jsModules/displayFunctions/subMenuNavigation";
import { areYouSure } from "../../jsModules/displayFunctions/mainMenuNavigation";
import {
  openMenu,
  delegation,
  searchUsers,
  closeSearch,
  resetFilterNav,
} from "../../jsModules/displayFunctions/subMenuNavigation";
import {
  GSAP_sortVisibleMobile,
  GSAP_sortInvisibleMobile,
  GSAP_addOpacity,
  GSAP_stagCards,
  GSAP_stagProfiles,
  GSAP_opacity0To1MenuProfile,
} from "../../jsModules/displayFunctions/gsap";
import { newUser } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { addTask } from "../planner/modules/mobNavigation";

export default function SubMenu(props) {
  console.log("navigation || SubMenu.js | SubMenu()");
  const tool = props.tool;

  function removeDelete() {
    console.log("navigation || SubMenu.js | removeDelete()");
    document.querySelectorAll(".modal-wrapper").forEach((modal) => {
      modal.classList.add("hide");
    });
  }

  function clearForm() {
    console.log("navigation || SubMenu.js | clearForm()");
    document.querySelector("form.FilterUsers").reset();
    const divisionSpan = document.querySelector("#mui-component-select-Division > span");
    const division = document.querySelector("#mui-component-select-Division");
    const hoursSpan = document.querySelector("#mui-component-select-hours > span");
    const hours = document.querySelector("#mui-component-select-hours");
    if (!divisionSpan) {
      division.textContent = "All";
    }
    if (!hoursSpan) {
      hours.textContent = "All";
    }
  }
  return (
    <nav className="SubMenu hide">
      <div
        className="menuIcon"
        onClick={() => {
          openMenu();
          resetFilterNav();
          tool === "planner" ? resetSubmenu() : openMenu();
          GSAP_opacity0To1MenuProfile();
          GSAP_sortInvisibleMobile();
          GSAP_addOpacity(".UserCard");
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
          GSAP_stagProfiles();
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
            GSAP_sortVisibleMobile();
          }}>
          {props.tool === "admin" ? <SearchRoundedIcon /> : <SearchRoundedIcon />}
        </div>
        <div
          className="menuEdit hide"
          onClick={(e) => {
            editUser();
            removeDelete();
            props.editProfile(props.id);
            GSAP_removeOpacity(".UserForm");
            setUpForm();
          }}>
          <EditRoundedIcon />
        </div>
        <div
          className="menuClose hide"
          onClick={() => {
            closeSearch(props.tool);
            props.setChosenCategory("");
            props.setChosenEmployee("");
            props.setChosenDivision("");
            props.setChosenHours("");
            props.setSearch("");
            clearForm();
            console.log("CLOSE MENU");
            GSAP_sortInvisibleMobile();

            GSAP_stagCards(props.list);
            GSAP_stagProfiles();
          }}>
          <CloseRoundedIcon />
        </div>
      </div>
      <div
        className={props.level === "Administrator" ? "newUserIcon" : "newUserIcon hiddenFromUser"}
        onClick={() => {
          newUser();
          setUpForm();
          GSAP_removeOpacity(".UserForm");
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
      <div
        className="menuAddTask hide"
        onClick={() => {
          addTask();
          closeSearch(props.tool);
          GSAP_sortInvisibleMobile();
        }}>
        <AddRoundedIcon />
      </div>
    </nav>
  );
}
