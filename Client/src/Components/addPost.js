// // import { useForm } from "react-hook-form";
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import * as yup from "yup";
// // import axios from "axios";

// // const schema = yup.object({
// //     title: yup.string().required(),
// //     body: yup.string().required(),
// // }).required();

// // export default function App({ userId, addPost, post }) {
// //     const { register, handleSubmit, formState: { errors } } = useForm({
// //         resolver: yupResolver(schema),
// //         values: post
// //     });
// //     const onSubmit = (data) => {
// //         console.log(data);
// //         if (post) {
// //             axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
// //                 .then(x => {
// //                     console.log(x.data)
// //                     addPost(x.data)
// //                 })
// //                 .catch(err => console.log(err))
// //         }
// //         else {

// //             data.userId = userId;
// //             axios.post("https://jsonplaceholder.typicode.com/posts", data)
// //                 .then(x => {
// //                     console.log(x.data)
// //                     addPost(x.data)

// //                 })
// //                 .catch(err => console.log(err))
// //         }

// //     }

// //     return (
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //             <label>כותרת</label>
// //             <input {...register("title")} />
// //             <p>{errors.title?.message}</p>
// //             <label>תוכן</label>
// //             <input {...register("body")} />
// //             <p>{errors.body?.message}</p>

// //             <input type="submit" value={post ? "עדכן" : "הוסף"} />
// //         </form>
// //     );
// // }
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

// const AddPost = ({ open, handleClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     tz: '',
//     dateOfStart: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // אם יש תנאי שלא להכניס אותו תפקיד פעמיים, אפשר לבדוק את זה כאן

//     axios.post("https://localhost:7104/api/Employee", formData)
//       .then((response) => {
//         console.log("Employee added successfully:", response.data);
//         handleClose();
//       })
//       .catch((error) => {
//         console.error("Error adding employee: ", error);
//         setError('Error adding employee. Please try again.');
//       });
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Add New Employee</DialogTitle>
//       <DialogContent>
//         <DialogContentText>Please fill in the details of the new employee:</DialogContentText>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="First Name"
//           type="text"
//           name="firstName"
//           fullWidth
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           label="Last Name"
//           type="text"
//           name="lastName"
//           fullWidth
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           label="ID"
//           type="text"
//           name="tz"
//           fullWidth
//           value={formData.tz}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           label="Start Work Date"
//           type="date"
//           name="dateOfStart"
//           fullWidth
//           value={formData.dateOfStart}
//           onChange={handleChange}
//         />
//         {error && <DialogContentText color="error">{error}</DialogContentText>}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button onClick={handleSubmit}>Add Employee</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddPost;
import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const AddPost = ({ open, handleClose, handleSave }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    id: '',
    startDate: '',
    birthDate: '',
    gender: '',
    roles: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    handleSave(employee);
    setEmployee({
      firstName: '',
      lastName: '',
      id: '',
      startDate: '',
      birthDate: '',
      gender: '',
      roles: [],
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="firstName"
          label="First Name"
          type="text"
          fullWidth
          value={employee.firstName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="lastName"
          label="Last Name"
          type="text"
          fullWidth
          value={employee.lastName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="id"
          label="ID"
          type="text"
          fullWidth
          value={employee.id}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="startDate"
          label="Start Date"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={employee.startDate}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPost;
