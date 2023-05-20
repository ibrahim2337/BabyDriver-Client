/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center p-4  mx-auto md:p-8">
        <h2 className="mt-20 lg:mt-28 mb-16 text-4xl font-bold leading-none text-center sm:text-5xl uppercase">
          Some Important Questions
        </h2>
        <div className="grid grid-cols-1 gap-10 md:gap-8 sm:p-3 md:grid-cols-1 lg:grid-cols-2 lg:px-12 xl:px-32">
          <div className="p-8 border rounded-md bg-slate-300 hover:bg-slate-200 hover:scale-95 lg:hover:scale-105">
            <h3 className="font-bold text-lg">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p className="mt-2 ">
            A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.<br></br>
            SQL and NoSQL databases are primarily server-side components, so they are not typically stored directly on the client-side. However, client-side applications may need to store small amounts of data locally for caching, session management, or offline usage. Here are some common approaches for client-side storage.
            </p>
          </div>
          <div className="p-8 border rounded-md bg-slate-300 hover:bg-slate-200 hover:scale-95 lg:hover:scale-105">
            <h3 className="font-bold text-lg">
              Compare SQL and NoSQL databases?
            </h3>
            <p className="mt-2 ">
              Structured Query Language is known as SQL. It is utilized in
              relational database management systems to store and manage data
              (RDMS). It's a common language for relational databases. A user is
              able to build, read, edit, and remove relational databases and
              tables with this tool.<br></br>
              SQL is the universal database language used by every RDBMS,
              including MySQL, Informix, Oracle, MS Access, and SQL Server.
              <br></br>
              Non-SQL or non-relational databases are referred to as NoSQL
              databases. It offers a data storage and retrieval method different
              from the relational databases' tabular relations paradigm. NoSQL
              databases do not use tables to store data.
            </p>
          </div>
          <div className="p-8 border rounded-md bg-slate-300 hover:bg-slate-200 hover:scale-95 lg:hover:scale-105">
            <h3 className="font-bold text-lg">
              What is express js? What is Nest JS?
            </h3>
            <p className="mt-2 ">
              Express.js is a popular web application framework for Node.js. It
              provides a minimalistic and flexible set of features for building
              web applications and APIs. Express.js is known for its simplicity,
              ease of use, and its ability to handle routing, middleware, and
              request/response handling in an efficient manner.<br></br>
              Nest.js provides a powerful set of features, including a robust
              module system, dependency injection container, decorators for
              defining routes and controllers, middleware support, and a
              comprehensive CLI (Command Line Interface) tool. It also supports
              various other libraries and tools, such as TypeScript, GraphQL,
              WebSockets, and more.
            </p>
          </div>
          <div className="p-8 border rounded-md bg-slate-300 hover:bg-slate-200 hover:scale-95 lg:hover:scale-105">
            <h3 className="font-bold text-lg">
              What is MongoDB aggregate and how does it work?
            </h3>
            <p className="mt-2 ">
              MongoDB Aggregation is a powerful feature of the MongoDB database
              that allows you to perform advanced data analysis and
              transformation operations on your data. It provides a framework
              for processing and manipulating documents within a collection,
              allowing you to extract, filter, group, and transform data in
              various ways. <br></br>
              The MongoDB Aggregation Pipeline is a sequence of stages, where
              each stage represents an operation that is applied to the
              documents as they pass through the pipeline. Each stage takes the
              input documents, performs a specific operation, and passes the
              output to the next stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
