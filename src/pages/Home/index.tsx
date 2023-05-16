import React, { useState } from 'react';
import Header from "@/components/Header";
import Main from "@/components/Main";

import * as S from "./styled";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    
    return (
        <S.Container>
           <Header loading={loading}/>
           <Main loading={loading} setLoading={setLoading}/>
        </S.Container>
    );
};

