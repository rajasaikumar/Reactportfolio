import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Sprintweb = () => {
 const [data, setData] = useState([]);
 const [currentpage,setcurrentpage] = useState(1)
 const recordsperpage = 7;
 const lastIndex = currentpage * recordsperpage;
 const firstIndex = lastIndex - recordsperpage;
 const records = data.slice(firstIndex,lastIndex);
 const npage = Math.ceil(data.length/recordsperpage)
 const numbers = [...Array(npage +1).keys()].slice(1)

 
  const [editId, setEditId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [status,setstatus] = useState([]);
  const [form, setForm] = useState({
    sprint_id:'',
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    status: '',
    project_id: '',
    created_date: '',
    modified_date: '',
  });

  
  const fetchSprint = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5077/Sprint/', {
        action: 'READ'
      });
      setData(response.data);
    } catch (error) {
      console.log('Error fetching sprints:', error);
      toast.error('Error fetching sprints');
    }
  };

  
  const fetchProject = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5098/Projectmaster/', {
        action: 'READ'
      });
      setProjects(response.data);
      console.log(projects);
    } catch (error) {
      console.log('Error fetching projects:', error);
      toast.error('Error fetching projects');
    }
  };

  const fetchstatus = async ()=> {
    try{
      const response = await axios.post('http://127.0.0.1:5086/SprintStatus/',{
        action:'READ'
      });
      setstatus(response.data);
      console.log(status);
    }catch (error){
    console.log('error fetching status:',error);
    }
  };
  

  useEffect(() => {
    fetchstatus();
    fetchProject();
    fetchSprint();
  }, []);

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return ${year}-${month}-${day}; 
  };

  
  const handleAddClick = () => {
    setEditId(null); 
    setForm({
      sprint_id:'',
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      status_id: '',
      project_id: '',
      created_date: '',
      modified_date: ''
    });
  };

  
  const handleInputChange =(e) =>{
  const {id,value} = e.target;
  setForm({...form,[id]:value});
  if (id === "project_id") {
    const selectedproject = projects.find(project => project.project_id === value);
    setForm((prevForm) => ({
        ...prevForm,
        project_id: value,
        project_name: selectedproject ? selectedproject.project_name : ''
    }));
  }else if (id === "status_id"){
    const selectedstatus = status.find(sts => sts.status_id === value);
    setForm((prevForm) =>({
      ...prevForm,
      status_id:value,
      status_name:selectedstatus ? selectedstatus.status_name :''
    }));
  }
  else {
    setForm((prevForm) => ({
        ...prevForm,
        [id]: value
    }));
}
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const alldata = {
        title: form.title,
        description: form.description,
        start_date: form.start_date,
        end_date: form.end_date,
        status: form.status_id,
        project_id: form.project_id,
        created_date: form.created_date,
        modified_date: form.modified_date,
        action: editId !== null ? 'UPDATE' : 'CREATE'
    };

    if (editId !== null) {
        alldata.sprint_id = editId; 
    }

    try {
      console.log('data',form.status)
        const response = await axios.post('http://127.0.0.1:5077/Sprint/', alldata, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

       
        if (editId !== null) {
           
            setData((prevData) => 
                prevData.map(data => 
                    data.sprint_id === editId ? response.data : data
                )
            );
            alert("Record Updated"); 
        } else {
            
            setData((prevData) => [...prevData, response.data]);
            alert("Record Created"); 
        }
        
        
        document.getElementById("btnCloseModal").click(); 

    } catch (error) {
        console.error("There was an error submitting", error);
        alert("Error submitting the form");
    }

    
    setForm({
      sprint_id:'',
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        status_id: '',
        project_id: '',
        created_date: '',
        modified_date: ''
    });
    setEditId(null); 
};

    
  
  const handleEditClick = (sprint) => {
    setEditId(sprint.sprint_id);
    setForm({
      title: sprint.title,
      description: sprint.description,
      start_date: formatDate(sprint.start_date), 
      end_date: formatDate(sprint.end_date), 
      status_id: sprint.status_id,
      project_id: sprint.project_id,
      created_date: formatDate(sprint.created_date), 
      modified_date: formatDate(sprint.modified_date) 
    });

    const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  };

 
  const handleDeleteClick = async (sprint_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this sprint?');
    if (!confirmDelete){
      return; 
    } 
    const requestBody = {
      sprint_id: sprint_id,
      action: "DELETE"
    };
    alert(requestBody.sprint_id);

    try {
      const response = await axios.post('http://127.0.0.1:5077/Sprint/', requestBody,{
       headers:{
        'Content-Type':'application/json'
       },
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(HTTP error! Status: ${response.status});
    } 
    alert("record deleted");
    fetchSprint();
    } catch (error) {
      console.log('Error deleting sprint:', error);
     
    }
  };

   const nextpage = ()=>{
   if(currentpage !== npage){
    setcurrentpage(currentpage +1)
   }
   }

   const prevpage = ()=>{
    if(currentpage !==1){
      setcurrentpage(currentpage -1)
    }
   }

   const changecpage = (id)=>{
    setcurrentpage(id)
   }

  return (
    <>
    <div>
      <div className='DivBody'>
        <div className='DivHeader'>
          <h2 className='header-title'></h2>
          <button
            className='btn'
            type='button'
            id='btnAdd'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            onClick={handleAddClick}
          >
            ADD
          </button>
        </div>
      </div>

      
      <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                {editId !== null ? 'Edit Sprint' : 'Add Sprint'}
              </h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' id='btnCloseModal'></button>
            </div>
            <div className='modal-body'>
              <form className='row g-3' onSubmit={handleSubmit} >
                <div className='col-md-6'>
                  <label htmlFor='title' className='form-label'>
                    Title
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    value={form.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlFor='description' className='form-label'>
                    Description
                  </label>
                  <textarea
                   
                    className='form-control'
                    id='description'
                    value={form.description}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlFor='start_date' className='form-label'>
                    Start Date
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='start_date'
                    value={form.start_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlFor='end_date' className='form-label'>
                    End Date
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='end_date'
                    value={form.end_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlFor='project_id' className='form-label'>
                    status
                  </label>
                  <select
                    id='status_id'
                    className='form-select'
                    value={form.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">
                      select status
                    </option>
                    {status.map((sts) => (
                      <option key={sts.status_id} value={sts.status_id}>
                        {sts.status_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='col-md-6'>
                  <label htmlFor='project_id' className='form-label'>
                    Project
                  </label>
                  <select
                    id='project_id'
                    className='form-select'
                    value={form.project_id}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">
                      select project
                    </option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.project_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='col-md-6'>
                  <label htmlFor='created_date' className='form-label'>
                    Created Date
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='created_date'
                    value={form.created_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlFor='modified_date' className='form-label'>
                    Modified Date
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='modified_date'
                    value={form.modified_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='modal-footer'>
                  <button type='submit' className='btn btn-primary'>
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      <div className='table-responsive rounded table-grid mx-5 mt-5' style={{ height: '400px' }}>
        <table id='basic-datatable' className='table dt-responsive table_striped nowrap'>
          <thead style={{ position: 'sticky', top: '0', background: '#fff', zIndex: 1 }}>
            <tr>
              <th className='table-header'>Actions</th>
              <th className='table-header'>Title</th>
              <th className='table-header'>Description</th>
              <th className='table-header'>Start Date</th>
              <th className='table-header'>End Date</th>
              <th className='table-header'>Status</th>
              <th className='table-header'>Project</th>
              <th className='table-header'>Created Date</th>
              <th className='table-header'>Modified Date</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((spr) => (
                <tr key={spr.sprint_id}>
                  <td>
                    <li className='fa-regular fa-pen-to-square' onClick={() => handleEditClick(spr)}></li>
                    &nbsp;&nbsp;&nbsp;
                    <li className='fa-solid fa-trash-can' onClick={() => handleDeleteClick(spr.sprint_id)}></li>
                  </td>
                  <td>{spr.title}</td>
                  <td>{spr.description}</td>
                  <td>{formatDate(spr.start_date)}</td>
                  <td>{formatDate(spr.end_date)}</td>
                  <td>{spr.status_name}</td>
                  <td>{spr.project_name}</td>
                  <td>{formatDate(spr.created_date)}</td>
                  <td>{formatDate(spr.modified_date)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='9' className='text-center'>
                  No Data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        <div className='col-md-10 pagi'>
          <div className='pagination'>
            <ul className='pagination'>
              <li className='page-item'>
                <a href='#' className='page-link'
                onClick={prevpage}>prev</a>
              </li>
              {
                numbers.map((n,i)=>(
                  <li className={page-item ${currentpage ===n ? 'active' : ''}}> 
                    <a href='#' className='page-link'
                     onClick={()=>changecpage(n)}>{n}</a>
                  </li>
                ))
              }
              <li className='page-item'>
                <a href='#' className='page-link'
                onClick={nextpage}>next</a>
              </li>
            </ul>
            </div>
        </div>
        </div>
    </>
  );
};

