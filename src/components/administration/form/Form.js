import React, { useState, useEffect, useCallback } from "react";
import { firebaseConfig } from "../../../jsModules/firebase/firebase";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
import { postUser } from "../../../jsModules/dbData/postData";
import { storeImage } from "../../../jsModules/dbData/postData";
import { editUser } from "../../../jsModules/dbData/editData";
import {
  clearUserForm,
  editUserResetForm,
  newUserResetForm,
} from "../../../jsModules/displayFunctions/displayEditForm";

export default function Form(props, { history, saveCredentials }) {
  console.log(props);
  const [focus, setFocus] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("avatar.jpg");
  const [imageFile, setImageFile] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [division, setDivision] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [tel, setTel] = useState("");
  const [level, setLevel] = useState("");
  const [hours, setHours] = useState("");

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [cpr, setCpr] = useState("");
  const [education, setEducation] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [filePath, setFilePath] = useState("");

  const [error, setError] = useState([null]);

  useEffect(() => {
    let today;
    date ? (today = new Date(date)) : (today = new Date());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    setDate(`${yyyy}-${mm}-${dd}`);
  }, [date]);

  const { user, setUser } = props;

  function resetForm() {
    setImage("");
    setCity("");
    setName("");
    setCountry("");
    setPosition("");
    setDivision("");
    setHours("");
    setDate("");
    setLevel("");
    setEmail("");
    setTel("");
    setAccount("");
    setContract("");
    setCpr("");
    setEducation("");
    setPostal("");
    setAddress("");
    setImageFile();
    setUser();
    setPassword("");
  }
  //virker med post , ikke med edit. Prøve igen at lave en useeffect med editform()
  useEffect(() => {
    filePath
      ? onFormSubmit({
          image: filePath,
          city: city,
          name: name,
          country: country,
          position: position,
          division: division,
          workHours: hours,
          startDate: date,
          userLevel: level,
          email: email,
          tel: tel,
          accountNumber: account,
          contract: contract,
          cpr: cpr,
          education: education,
          postalCode: postal,
          streetAndNumber: address,
          password: password,
        })
      : console.log(filePath);
  }, [filePath]);
  console.log(password);
  function submit(e) {
    e.preventDefault();
    console.log("submited");
    if (
      !document.querySelector(".password-safety").classList.contains("hide") &&
      document.querySelector(".password input").value === ""
    ) {
      console.log("no password");
    } else if (!document.querySelector(".password-safety").classList.contains("hide")) {
      console.log("new user submitted");
      handleSignUp();
      /*      setTimeout(() => {
        if (error) {
          console.log(error);
          <div className="errorDiv">{error}</div>;
        } else { */
      storeImage(imageFile, email, setFilePath);
      setTimeout(() => {
        /*   onFormSubmit({
          image: filePath,
          city: city,
          name: name,
          country: country,
          position: position,
          division: division,
          workHours: hours,
          startDate: date,
          userLevel: level,
          email: email,
          tel: tel,
          accountNumber: account,
          contract: contract,
          cpr: cpr,
          education: education,
          postalCode: postal,
          streetAndNumber: address,
          password: password,
        }); */
      }, 2000);

      document.querySelector(".succes").classList.remove("hide");
      setTimeout(() => {
        resetForm();
      }, 4000);
      /*         }
      }, 100); */
    } else {
      console.log("old user putted");
      editProfile({
        image: image,
        city: city,
        name: name,
        country: country,
        position: position,
        division: division,
        workHours: hours,
        startDate: date,
        userLevel: level,
        email: email,
        tel: tel,
        accountNumber: account,
        contract: contract,
        cpr: cpr,
        education: education,
        postalCode: postal,
        streetAndNumber: address,
        id: props.id,
      });
      storeImage(imageFile, email);
      document.querySelector(".succes").classList.remove("hide");
      setTimeout(() => {
        resetForm();
      }, 20000);
    }
  }

  function clear() {
    if (!document.querySelector(".password-safety").classList.contains("hide")) {
      newUserResetForm();
      clearUserForm();
      resetForm();
    } else {
      editUserResetForm();
      clearUserForm();
      resetForm();
    }
  }
  //kaldes herfra med payload fra ovenstående useStates
  async function editProfile(payload) {
    editUser(payload);
  }
  async function onFormSubmit(payload) {
    postUser(payload);
  }

  useEffect(() => {
    if (user) {
      console.log("User ændret");
      setName(user[0].name);
      setCountry(user[0].country);
      setCity(user[0].city);
      setImage(user[0].image ? user[0].image : "avatar.jpg");

      setPosition(user[0].position);
      setDivision(user[0].division);
      setHours(user[0].workHours);
      setDate(user[0].startDate);
      setLevel(user[0].userLevel);
      setEmail(user[0].email);
      setTel(user[0].tel);

      setAccount(user[0].accountNumber);
      setContract(user[0].contract);
      setEducation(user[0].education);
      setCpr(user[0].cpr);
      setPostal(user[0].postalCode);
      setAddress(user[0].streetAndNumber);
    }
  }, [user]);

  const handleSignUp = useCallback(
    async (e) => {
      console.log(password);
      console.log(email);
      try {
        await firebaseConfig.auth().createUserWithEmailAndPassword(email.toString().trim(), password.toString().trim());
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
    },
    [history, email, password]
  );

  return (
    <>
      <form className="Form">
        <PersonForm
          setFocus={setFocus}
          focus={focus}
          name={name}
          setName={setName}
          setCountry={setCountry}
          country={country}
          city={city}
          setCity={setCity}
          image={image}
          setImage={setImage}
          setImageFile={setImageFile}
        />
        <WorkForm
          setPosition={setPosition}
          setDivision={setDivision}
          setHours={setHours}
          setDate={setDate}
          setLevel={setLevel}
          setEmail={setEmail}
          setTel={setTel}
          division={division}
          email={email}
          position={position}
          date={date}
          tel={tel}
          level={level}
          hours={hours}
        />
        <PrivateForm
          setAccount={setAccount}
          setContract={setContract}
          setCpr={setCpr}
          setEducation={setEducation}
          setPostal={setPostal}
          setAddress={setAddress}
          account={account}
          cpr={cpr}
          education={education}
          contract={contract}
          postal={postal}
          address={address}
          password={password}
          setPassword={setPassword}
        />
        <FormNav user={user} setUser={setUser} submit={submit} clear={clear} />
      </form>

      <article className="succes hide">
        <progress value="0" max="100" id="loader">
          0%
        </progress>
        <p>Sending</p>
      </article>
    </>
  );
  /*   }; */
}
