import { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  let [status, setStatus] = useState(props.status);
  let [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handdleChange = (ev) => {
    setStatus(ev.currentTarget.value);
  };

  const sendStatus = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  return (
    <>
      {editMode && (
        <div>
          <input
            autoFocus
            value={status}
            onBlur={sendStatus}
            onChange={handdleChange}
            type="text"
          />
        </div>
      )}
      {!editMode && (
        <div onDoubleClick={() => setEditMode(true)}>
          {props.status || "no status here"}
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
