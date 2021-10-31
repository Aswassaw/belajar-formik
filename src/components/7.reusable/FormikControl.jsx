import React from "react";
import Input from "./control/Input";
import Textarea from "./control/Textarea";
import Select from "./control/Select";
import Radio from "./control/Radio";
import Checkbox from "./control/Checkbox";
import Datepicker from "./control/Datepicker";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "datepicker":
      return <Datepicker {...rest} />
    default:
      return null;
  }
};

export default FormikControl;
