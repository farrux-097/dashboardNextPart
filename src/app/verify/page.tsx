import VerifySection from '@/components/verifySection/VerifySection';
import { memo } from 'react';

const Verify = async({searchParams} : {searchParams: Promise<{q:string}>}) => {
    const {q} = await searchParams
    const user = atob(q)
    console.log(atob(q));
    
    return (
    <VerifySection user={user}/>
  );
};

export default memo(Verify);