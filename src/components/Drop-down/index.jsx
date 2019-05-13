import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import "./drop-down.scss";

function DropDown({
  head,
  list1,
  list2,
  list3,
  list4,
  list5,
  className,
  classNameToggle
}) {
  return (
    <MDBDropdown className={className}>
      <MDBDropdownToggle nav caret color="default" className={classNameToggle}>
        {head}
      </MDBDropdownToggle>

      <MDBDropdownMenu basic color="default">
        <MDBDropdownItem className="dropdown-search">{list1}</MDBDropdownItem>
        <MDBDropdownItem className="dropdown-search">{list2}</MDBDropdownItem>
        <MDBDropdownItem className="dropdown-search">{list3}</MDBDropdownItem>
        <MDBDropdownItem className="dropdown-search">{list4}</MDBDropdownItem>
        <MDBDropdownItem className="dropdown-search">{list5}</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropDown;
