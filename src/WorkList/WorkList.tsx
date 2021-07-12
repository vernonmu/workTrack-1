import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@material-ui/core";
import "./WorkList.css";

interface IProps {
  needsRefresh: boolean;
  setRefresh: Function;
}

export const WorkList = (props: IProps) => {
  const { needsRefresh, setRefresh } = props;
  const [listOfTasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchWork = async () => {
      const myHeaders = new Headers();
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      fetch("/getworklist", requestOptions)
        .then((res) => res.json())
        .then((obj) => {
          setTasks(obj.list);
          setRefresh(false);
        })
        .catch(err => {
          console.error('error in fetch worklist', err)
        });
    };
    
    fetchWork();
  }, [needsRefresh, setRefresh]);

  useEffect(() => {
    window.console.log("listoftasks ", listOfTasks);
  }, [listOfTasks]);

  return (
    <Paper className="work-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Tast Name</TableCell>
              <TableCell>Due</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOfTasks.map((task: Record<string, any>, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>
                    <select>
                      <option>Open</option>
                      <option>Closed</option>
                      <option>Pending</option>
                    </select>
                  </TableCell>
                  <TableCell>{task.taskOwner}</TableCell>
                  <TableCell>{task.taskName}</TableCell>
                  <TableCell>{task.dateDue}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
