import React from 'react'

function ListAdminEditableRow({editFormData,handleEditFormChange,handleCancel}) {
  return (
    <tr>
    {/* <td>  
     <input type="text" name="Uid" style={{backgroundColor:'#E8F0FE'}} 
      value={editFormData.Uid} 
     className="form-control" placeholder="Uid"required="number" 
    //  onChange={(e)=>setnewOid(e.target.value)}
    // onChange={handleEditFormChange}
    />
                         </td> */}
                         <td>
      <input type="text" name="First_name" style={{backgroundColor:'#E8F0FE'}} 
       value={editFormData.First_name} 
       className="form-control" placeholder="First_name"required="text" 
    //    onChange={(e)=>setnewOname(e.target.value)}
    onChange={handleEditFormChange}
       />
                       </td>
 <td>
  <input type="text" name="Last_name"  style={{backgroundColor:'#E8F0FE'}} 
  value={editFormData.Last_name} 
  className="form-control" placeholder="Last_name"required="text" 
//   onChange={(e)=>setnewAddress(e.target.value)}
onChange={handleEditFormChange}
  />
 </td>
  <td>
   <input type="text" name="Email"  style={{backgroundColor:'#E8F0FE'}} 
   value={editFormData.Email} 
   className="form-control" placeholder="Email"required="text" 
//    onChange={(e)=>setnewContact(e.target.value)}
onChange={handleEditFormChange}
   />
     </td>
     {/* <td>
   <input type="text" name="Oid"  style={{backgroundColor:'#E8F0FE'}} 
   value={editFormData.Oid} 
   className="form-control" placeholder="Oid"required="text" 
//    onChange={(e)=>setnewContact(e.target.value)}
onChange={handleEditFormChange}
   />
     </td> */}
                     <td>
                     <i class="far fa-save fa-2x"  type="submit" style={{marginBottom: "5px",marginRight:"20px"}}></i>
                     <i class="far fa-window-close fa-2x" onClick={handleCancel}></i>
 {/* <button type="submit" 
//   onClick={updateList} 
  // class="save-btn"
  className="button submit" style={{backgroundColor: "#4CAF50",border: "none",color: "white",padding:" 15px 32px",textAlign: "center",textDecoration:" none",display: "inline-block",fontSize: "18px",padding:"4px 12px 4px 12px",fontFamily:"'Roboto',sans-serif",borderRadius:"8px"}}
  >
    Save</button>
    <button type="cancel" 
//   onClick={updateList} 
  // class="save-btn"
  className="button cancel" style={{backgroundColor: "#f44336",border: "none",color: "white",padding:" 15px 32px",textAlign: "center",textDecoration:" none",display: "inline-block",fontSize: "18px",padding:"4px 12px 4px 12px",fontFamily:"'Roboto',sans-serif",borderRadius:"8px"}}
  onClick={handleCancel}
  >Cancel</button> */}
                 </td>
</tr>
  )
}

export default ListAdminEditableRow