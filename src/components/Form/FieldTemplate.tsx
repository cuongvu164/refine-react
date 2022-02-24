import React from "react";

function FieldTemplate(props: any) {
  const { classNames, description, children, rawDescription, errors } = props;
  // console.log("props filedtemplate", props)
  return (
    <div className={classNames}>
      {/* {description} */}
      {children}
      <div style={{ color: 'red' }}>
        {errors}
      </div>
    </div>
  );
}

export default FieldTemplate;
