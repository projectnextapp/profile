import React from "react";

export function FunctionTest(props) {

    return (
        <>
<h1>I love react</h1>
<h2>its a good course for me</h2>
<p>but i dont want to compare it to angular</p>
<p>{props.testimonial}</p>
<p>children component:{props.children}</p>


<div>
    <div></div>
</div>
</>
    );
    
}