// const gigya = window.gigya;

// const testFunction = () => {
//   gigya.accounts.showScreenSet({
//     screenSet: "NewRaas4nov15-RegistrationLogin",
//     customButtons,
//   });
// };

class gigyaLocal {
  constructor() {
    this.gigyaObject = window.gigya;
  }
  loginScreenSet() {
    // this.gigyaObject.accounts.showScreenSet({
    //   screenSet: "NewRaas4nov15-RegistrationLogin",
    //   customButtons,
    //   onSubmit: toggleP,
    // });
    this.gigyaObject.accounts.showScreenSet({
      screenSet: "simple-screen-set",
      startScreen: "login-screen",
    });
  }
  registerScreenSet() {
    this.gigyaObject.accounts.showScreenSet({
      screenSet: "NewRaas4nov15-RegistrationLogin",
      startScreen: "gigya-register-screen",
    });
  }
  updateProfileScreenSet() {
    this.gigyaObject.accounts.showScreenSet({
      screenSet: "NewRaas4nov15-ProfileUpdate",
    });
  }
  logout() {
    this.gigyaObject.logout({
      //   callback: onLogout(),
    });
    // const onLogout = (response) => {
    //   if (this.response.errorCode === 0) {
    //     const element = (document.getElementById("loggedIn").innerHTML = "");
    //     console.log(element);
    //     alert("Congratulations! You are now logged out.");
    //   } else {
    //     alert(`Error: ${response.errorMessage}`);
    //   }
    // };
  }
}

gigyaLocalObject = new gigyaLocal();

gigyaLocal = window.gigya;

// Login screen
const loginScreenSet = () => {
  gigyaLocal.accounts.showScreenSet({
    screenSet: "NewRaas4nov15-RegistrationLogin",
    customButtons,
    onSubmit: toggleP,
  });
};

// Register screen
const registerScreenSet = () => {
  gigyaLocal.accounts.showScreenSet({
    screenSet: "NewRaas4nov15-RegistrationLogin",
    startScreen: "gigya-register-screen",
  });
};

function toggleP(eventObject) {
  console.log("toggleP function triggered");
  const element = (document.getElementById("loggedIn").innerHTML =
    "You are logged in with Gigya :)");
  console.log(element);
}

// function onLogout(response) {
//   if (response.errorCode === 0) {
//     const element = (document.getElementById("loggedIn").innerHTML = "");
//     console.log(element);
//     alert("Congratulations! You are now logged out.");
//   } else {
//     alert(`Error: ${response.errorMessage}`);
//   }
// }

// Global variables
// TODO
let customButtons = [
  {
    // customButton object #1
    type: "saml",
    providerName: "Gateway One",
    idpName: "testIdp-gig01",
    iconURL: "//developers.gigya.com/download/attachments/15795144/IDP.png",
    logoURL: "",
    lastLoginIconURL:
      "//developers.gigya.com/download/attachments/15795144/IDP.png",
    position: "1",
  },
];
