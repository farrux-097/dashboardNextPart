import Me from '@/components/me/Me';
import { memo, ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="Layout">
            <Me />
            {children}
        </div>
    );
};

export default memo(Layout);