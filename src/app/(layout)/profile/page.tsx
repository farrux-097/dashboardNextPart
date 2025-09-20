"use client"
import { memo, useEffect, useState } from "react";
import { Card, Avatar, Spin, Typography, Tag, Divider, Button } from "antd";
import {
    UserOutlined,
    MailOutlined,
    HomeOutlined,
    CrownOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

interface UserData {
    id: number;
    createdAt: string;
    updatedAt: string;
    fname: string;
    lname: string | null;
    isActive: boolean;
    address: string | null;
    email: string;
    role: string;
}

const Profile = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/auth/me", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-white">
                <Spin size="large" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-gray-50">
                <Text type="danger" className="text-xl">
                    Failed to load profile
                </Text>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-white p-6">
            <Card
                className="shadow-2xl w-full max-w-2xl !mb-[110px] rounded-3xl border-0 backdrop-blur-md bg-white/70"
            >
                <div className="flex flex-col items-center text-center">
                    <Avatar
                        size={120}
                        icon={<UserOutlined />}
                        className="bg-gradient-to-r from-indigo-500 to-blue-500"
                    />
                    <Title level={2} className="!mt-4 !mb-1 text-gray-800">
                        {user.fname} {user.lname ?? ""}
                    </Title>
                    <Tag color={user.isActive ? "green" : "red"} className="text-base px-3 py-1 rounded-full">
                        {user.isActive ? "Active" : "Inactive"}
                    </Tag>
                </div>

                <Divider />

                <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-3 text-lg">
                        <MailOutlined className="text-blue-500" /> {user.email}
                    </p>
                    <p className="flex items-center gap-3 text-lg">
                        <HomeOutlined className="text-green-500" /> {user.address ?? "No address provided"}
                    </p>
                    <p className="flex items-center gap-3 text-lg">
                        <CrownOutlined className="text-yellow-500" />
                        <Tag color="blue" className="ml-1 text-base px-3 py-1 rounded-full">
                            {user.role.toUpperCase()}
                        </Tag>
                    </p>
                </div>

                <Divider />

                <div className="flex justify-center gap-4 mt-4">
                    <Button type="primary" size="large" className="rounded-full px-6">
                        Edit Profile
                    </Button>
                    <Button danger size="large" className="rounded-full px-6">
                        Logout
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default memo(Profile);
