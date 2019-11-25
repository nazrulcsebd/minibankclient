const dev = {
  BASE_URL: "https://minibanking.com",
  API_BASE_URL: "http://localhost:50505/api"
};

const prod = {
  BASE_URL: "https://minibanking.com",
  API_BASE_URL: "http://codebonds.com/api"
};

export const config = { ...prod };
//process.env.REACT_APP_ENVIRONMENT.trim() === "dev" ? { ...dev } : { ...prod };

export const GuidDefaultValue = "00000000-0000-0000-0000-000000000000";

export function getHeaders() {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return {
    Authorization: `bearer ${token}`
  };
}

export function getToken() {
  return JSON.parse(localStorage.getItem("auth")).token;
}

export const ButtonCaption = {
  Save: "Save",
  Update: "Update",
  AddNew: "Add New",
  Delete: "Delete",
  Activate: "Activate",
  InActivate: "In-Activate",
  Search: "Search",
  Clear: "Clear"
};

export const AuthorizationEvent = {
  Entry: "Entry",
  Edit: "Edit",
  Delete: "Delete",
  View: "View"
};

export const NotificationType = {
  Success: "Success",
  Info: "Info",
  Warning: "Warning",
  Error: "Error"
};

export const DefaultLoginErrorMessage = {
  Type: NotificationType.Info,
  Message: "Login failed. Please check API server connection."
};

export const DefaultResponseMessage = {
  Type: NotificationType.Info,
  Message: "Request is succeed."
};

export const DefaultErrorMessage = {
  Type: NotificationType.Info,
  Message: "Request failed. Please try again later."
};

export const EntryOrUpdateById = (id, titlePrefix = "Data") => {
  return `${titlePrefix} ${
    id === GuidDefaultValue ? AuthorizationEvent.Entry : AuthorizationEvent.Edit
    }`;
};

export const StatusTroothValueByTypeNumber = value => {
  if (value === "-1") {
    return null;
  } else if (value === "1") {
    return true;
  } else if (value === "0") {
    return false;
  } else {
    return true;
  }
};

export const PageNumberDefault = 1;
export const PageSizeDefault = 100;
export const PageSizeOptions = ["5", "10", "20", "30", "50", "100"];
