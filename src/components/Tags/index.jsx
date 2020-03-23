import React from 'react';
import {Link} from 'gatsby';

const kebabCase = require('lodash/kebabCase');
const capitalize = require('lodash/capitalize');

const Tags = ({tags}) => (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="tag-wrapper">
                    <ul className="tags">
                        {tags.map(tag => (
                            <li className="text-capitalize">
                                <Link key={Math.random()} to={`/blog/tag/${kebabCase(tag)}`}>
                                    {capitalize(tag)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Tags;
