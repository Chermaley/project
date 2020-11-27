import React from 'react';
import MyPosts from './myPosts';
import classes from './profile.module.scss';
const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.header}>
                <img src="https://www.meme-arsenal.com/memes/2da86c6f8d24b841b7052e8bd1246fd3.jpg" alt='avatar'/>
            </div>
            <div>
                ava - description
            </div>
            <MyPosts/>
        </div>
    );
};
export default Profile;