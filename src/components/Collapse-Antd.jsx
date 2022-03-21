import React from 'react'
import { Collapse } from 'antd';


export const AppCollapse = () => {
  
  const { Panel } = Collapse;

  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

  return (
    <div id='collapse' className='block collapseBlock'>
      <div className="container-fluid">

        <div className="titleHolder">
          <h2>Preguntas frecuentes</h2>
          <p>Este es la sescripción del título Preguntas frecuentes :)</p>
        </div>

        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            {text}
          </Panel>
          <Panel header="This is panel header 2" key="2">
            {text}
          </Panel>
          <Panel header="This is panel header 3" key="3">
            {text}
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
