"use client";
import { memo, useEffect } from 'react';

const Me = () => {
    useEffect(() => {
        const getMe = async () => {
            try {
                await fetch("/api/auth/me");
            }catch{}
        };

        getMe();
    }, []);

    return (
        <></>
    );
};

export default memo(Me);