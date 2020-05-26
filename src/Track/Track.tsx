import React, { useState } from "react";
import "./Track.css";

interface IProps {
  onSubmit: Function;
}

export const Track = (props: IProps) => {
  const { onSubmit } = props;
  const [dateDue, handleDate] = useState("");
  const [taskName, handleTaskName] = useState("");
  const [taskJules, handleJules] = useState("");
  const [taskOwner, handleOwner] = useState("");
  const [taskStatus, handleStatus] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const shipping = {
      taskName,
      dateDue,
      taskStatus,
      taskOwner,
      taskJules,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shipping),
    };

    fetch("/addtrack", requestOptions).then((res) => {
      if (res.status === 200) {
        // reset form after submitting
        handleDate("");
        handleTaskName("");
        handleJules("");
        handleOwner("");
        handleStatus("");
      }

      return res;
    });
    onSubmit();
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e: React.FormEvent): void => handleSubmit(e)}
      >
        <h2>Add Task</h2>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e: React.SyntheticEvent<HTMLInputElement>): void =>
              handleTaskName(e.currentTarget.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              handleDate(e.currentTarget.value)
            }
            value={dateDue}
          >
            <option disabled />
            <option value="tomorrow">Tomorrow</option>
            <option value="twoDays">2 Days (2)</option>
            <option value="midWeek">Mid-week</option>
            <option value="friday">Friday</option>
            <option value="nextWeek">Next Week</option>
            <option value="later">Later</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={taskStatus}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              handleStatus(e.currentTarget.value)
            }
          >
            <option disabled />
            <option value="open" label="Open" />
            <option value="closed" label="Closed" />
            <option value="blocked" label="Blocked" />
            <option value="pending" label="Pending" />
          </select>
        </div>
        <div className="form-group">
          <label>Owner</label>
          <input
            type="text"
            placeholder="Owner name"
            value={taskOwner}
            onChange={(e: React.SyntheticEvent<HTMLInputElement>): void =>
              handleOwner(e.currentTarget.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Jules</label>
          <input
            type="text"
            placeholder="Enter estimate time to complete in hours"
            value={taskJules}
            onChange={(e: React.SyntheticEvent<HTMLInputElement>): void =>
              handleJules(e.currentTarget.value)
            }
          />
        </div>
        <button className="button-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
