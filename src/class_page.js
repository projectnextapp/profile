import React from 'react';


export class Test extends React.Component{
render(){
return (
    <>
<h1>It is great learning rjs</h1>
<p>this is what the student said:{this.props.testData}</p>
<p>this is what  another student said:{this.props.anotherData}</p>
<p>children component:{this.props.children}</p>
</>
)

}


}

// export default function class_page() {
//   return (
//     <div>class_page</div>
//   )
// }
