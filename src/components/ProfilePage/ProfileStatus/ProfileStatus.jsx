import React from "react";

export default class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status,
    };
    this.editStatus = this.editStatus.bind(this);
    this.handdleChange = this.handdleChange.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  editStatus() {
    this.setState({
      editMode: true,
    });
  }

  handdleChange(ev) {
    this.setState({
      status: ev.target.value,
    });
  }

  setStatus() {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.status === this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <>
        {this.state.editMode && (
          <div>
            <input
              autoFocus
              value={this.state.status}
              onBlur={this.setStatus}
              onChange={this.handdleChange}
              type="text"
            />
          </div>
        )}
        {!this.state.editMode && (
          <div onDoubleClick={this.editStatus}>
            {this.props.status || "no status here"}
          </div>
        )}
      </>
    );
  }
}
