import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div className='container'>
            <PageTitle title='Blogs'></PageTitle>
            <h1 className='text-center my-4'>Blogs</h1>
            <div className="row d-flex justify-content-center">
                <div className="col col-lg-7 d-flex justify-content-center">
                    <div className='my-3'>
                        <h3> Difference between javascript and nodejs?</h3>
                        <p>1.javascript is a programming language which is used for writing script on the website.NodeJs is a javascript runtime environment. <br />
                            2. javascript is basically used on client-side.NodeJs used for server-side. <br />
                            3.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. NodeJs can run javascript in V8 engine.
                        </p>
                        <h3>When should you use nodejs and when should you use mongodb?</h3>
                        <p>mongodb is used for store data and it is non-relational database. Nodejs helps to connect the client-side to database by its server-side</p>
                        <h3>Differences between sql and nosql databases.</h3>
                        <p>1. SQL is Relational Database Management System(RDMS). NOSQL is Non-Relational or distributed Database System. <br />
                            2. Sql database have static schema. Nosql database have a dynamic schema. <br />
                            3. sql is best form complex quries. Nosql is best for hierarchical  quries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;