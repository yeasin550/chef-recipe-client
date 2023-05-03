import React, { useRef } from "react";
// import ReactToPrint from "react-to-print";
import ReactPrint from "react-to-print";

const Blog = () => {
  const print = useRef();
  return (
    <div className="mt-4 mx-12">
      <div className="py-4 border-b">
        <h2 className="text-xl font-semibold">Questions</h2>
      </div>
      {/* all questions will be here  */}
      <div>
        <ReactPrint trigger={() => <button className="text-3xl font-bold text-red-700 underline">Print</button>} content={()=> print.current} >
          
        </ReactPrint>
        <div ref={print}>
          <div className="py-4">
            
        <div>
          <h4 className="text-lg font-medium">Question 01</h4>
          <p className="py-4 text-base text-gray-700">
            <b>
              Tell us the differences between uncontrolled and controlled
              components. ?
            </b>
            —/-== React, components can be classified into two types: controlled
            and uncontrolled components. The main difference between the two is
            how they handle state and user input. An uncontrolled component does
            not manage its own state. Instead, it relies on the DOM to store and
            manage its state.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Question 02</h4>
          <p className="py-4 text-base text-gray-700">
            <b>How to validate React props using PropTypes ?</b> === PropTypes
            exports a range of validators that can be used to make sure the data
            you receive is valid. In this example, we’re using PropTypes.string.
            When an invalid value is provided for a prop, a warning will be
            shown in the JavaScript console. For performance reasons, propTypes
            is only checked in development mode.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Question 03</h4>
          <p className="py-4 text-base text-gray-700">
            <b> Tell us the difference between nodejs and express js. ?</b> ====
            Node.js and Express.js are both JavaScript-based technologies
            commonly used in building web applications. However, there are some
            differences between the two. Node.js provides a runtime environment
            for executing JavaScript code on the server-side, while Express.js
            is a web framework built on top of Node.js that provides a set of
            tools and features for building web applications.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Question 04</h4>
          <p className="py-4 text-base text-gray-700">
            <b>
              What is a custom hook, and why will you create a custom hook? ?
            </b>
            ==== it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. custom hooks are reusable
            functions in React that allow you to extract and reuse logic across
            multiple components, making your code more modular, maintainable,
            and easier to read.
          </p>
        </div>
        </div>
         </div>
        
      </div>
     
      
    </div>
  );
};

export default Blog;
