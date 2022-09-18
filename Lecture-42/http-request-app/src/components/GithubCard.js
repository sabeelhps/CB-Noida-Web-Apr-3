import React, { useEffect, useState } from 'react'

const GithubCard = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [profile, setProfile] = useState({
        name: null,
        followers: 0,
        following: 0,
        profileImage: null
    });

    useEffect(() => {
        
        fetch('https://api.github.com/users/sabeelhps')
            .then((res) => res.json())
            .then((data) => {
                setProfile(() => {
                    setIsLoading(() => false);
                    return {
                        name: data.name,
                        followers: data.followers,
                        following: data.following,
                        profileImage:data.avatar_url
                    }
                })
            })
            .catch((err) => {
                setHttpError(() => err.message || 'Something went wrong');
                setIsLoading(() => false);
            }
        );
    }, []);
    
    if (isLoading) {
        return <h1>Loading...........</h1>
    }

    if (httpError) {
        return <h1>Something went wrong while fetching the data</h1>
    }

    return (
        <figure>
            {profile.profileImage && <img src={profile.profileImage} alt={profile.name} />}
            <figcaption>
                <p>Followers : { profile.followers ? profile.followers : '0'}</p>
                <p>Following : { profile.following ? profile.following : '0'}</p>
                {profile.name && <p>Name : { profile.name }</p>}
            </figcaption>
        </figure>
    )
}

export default GithubCard;