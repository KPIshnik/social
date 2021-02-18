import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
  };
};

let DialogsWraper = connect(mapStateToProps)(Dialogs);

export default DialogsWraper;
