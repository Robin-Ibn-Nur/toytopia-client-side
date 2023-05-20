import React from 'react';
import { usePageTitle } from '../../CustomHook/usePageTitle';

const Blog = () => {
    usePageTitle("ToyToPia")

    const blogPosts = [
        {
            title: 'Understanding Access Tokens and Refresh Tokens',
            date: 'May 20, 2023',
            author: 'John Doe',
            excerpt:
                "An access token is a short- lived token that is used to authenticate a user to a service.A refresh token is a long - lived token that can be used to obtain a new access token when the old one expires. Access tokens and refresh tokens are typically stored in the browser's local storage or cookies. Access tokens and refresh tokens should be stored securely on the client-side. They should not be stored in plain text, as they could be intercepted by an attacker. Access tokens and refresh tokens should be encrypted and stored in a secure location.",
            slug: 'access-tokens-and-refresh-tokens',
        },
        {
            title: 'Comparison of SQL and NoSQL Databases',
            date: 'May 22, 2023',
            author: 'Jane Smith',
            excerpt:
                "SQL and NoSQL are two different types of databases. SQL databases are relational databases, while NoSQL databases are non-relational databases. Relational databases store data in tables, which are made up of rows and columns. NoSQL databases store data in a variety of formats, including documents, key-value pairs, and graphs. SQL databases are typically used for applications that require a lot of data to be stored and queried. NoSQL databases are typically used for applications that require a lot of flexibility in how data is stored and queried.",
            slug: 'sql-vs-nosql-databases',
        },
        {
            title: 'Introduction to Express.js and NestJS',
            date: 'May 25, 2023',
            author: 'Robert Johnson',
            excerpt:
                "Express.js is a web application framework for Node.js. It is a popular choice for building web applications because it is easy to use and provides a lot of features out of the box. Express.js is based on the Connect.js framework and provides a number of features, including routing, middleware, and template engines. Nest.js is a framework for building server-side applications using JavaScript. It is based on Angular and provides a number of features, including dependency injection, routing, and testing. Nest.js is a good choice for building large, complex applications because it provides a lot of features and is well-documented.",
            slug: 'expressjs-and-nestjs-introduction',
        },
        {
            title: 'Understanding MongoDB Aggregation',
            date: 'May 28, 2023',
            author: 'Emily Davis',
            excerpt:
                "MongoDB Aggregate is a feature of MongoDB that allows you to perform complex queries on your data. Aggregate queries are written using the aggregation pipeline, which is a series of stages that are applied to your data in order to produce the desired results.",
            slug: 'mongodb-aggregation-explained',
        },
    ];


    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 underline">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.slug} className="bg-white shadow-md rounded-md hover:underline">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2 ">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.date} | By {post.author}</p>
                                <p className="text-gray-700">{post.excerpt}</p>
                                <p className="text-pink-500 font-medium mt-4 inline-block">
                                    {post.slug}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;