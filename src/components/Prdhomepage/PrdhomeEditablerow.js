import React from 'react'

function PrdhomeEditablerow({editFormData,handleEditFormChange,handleCancel}) {
  return (
    <tr>
    <td>  
     <input style={{backgroundColor:'#E8F0FE'}} type="text" 
     name="Part_Tool"
      value={editFormData.Part_Tool} 
     className="form-control" placeholder="Part_Tool"required="text" 
    //  onChange={(e)=>setnewOid(e.target.value)}
    onChange={handleEditFormChange}
    />
                         </td>
                         <td>
      <input style={{backgroundColor:'#E8F0FE'}} type="text" name="Cycle"
       value={editFormData.Cycle} 
       className="form-control" placeholder="Cycle"required="number" 
    //    onChange={(e)=>setnewOname(e.target.value)}
    onChange={handleEditFormChange}
       />
                       </td>
                     <td>
                     <i class="far fa-save fa-2x"  type="submit" style={{marginBottom: "5px",marginRight:"20px"}}></i>
                     <i class="far fa-window-close fa-2x" onClick={handleCancel}></i>
 {/* <button type="submit" 
//   onClick={updateList} 
  // class="save-btn"
  className="button submit" style={{marginBottom: "5px",marginRight:"3px",backgroundColor: "#4CAF50",border: "none",color: "white",padding:" 15px 32px",textAlign: "center",textDecoration:" none",display: "inline-block",fontSize: "18px",padding:"4px 12px 4px 12px",fontFamily:"'Roboto',sans-serif",borderRadius:"8px"}}
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

export default PrdhomeEditablerow