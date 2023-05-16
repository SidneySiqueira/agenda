import React from 'react';
import * as S from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';

interface Props {
    loading: boolean;
}

const Header = ({ loading }: Props) => {
    const { contacts } = useSelector((state: RootState) => state.api);
    const listContacts = contacts ? Object.values(contacts) : [];

    const renderContent = () => {
        if (loading) {
            return null;
        }
        return (
            <>
                <S.Title>Telefone</S.Title>
                <S.ContactsNumber>{`Você tem ${listContacts.length} contatos no telefone`}</S.ContactsNumber>
            </>
        );
    };

    return <S.Container>{renderContent()}</S.Container>;
};

export default Header;

