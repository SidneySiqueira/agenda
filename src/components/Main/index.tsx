import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Modal from '../Modal';
import Search from '../Search';
import Contact from '../Contact';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '@/Redux/apiSlice';
import { ContactState, setSelectedContact } from '@/Redux/selectedContactSlice';
import Order from '@/utills/alphabeticalOrder';
// import formatDDD from '@/utills/formatedDDD';
import formatPhoneNumber from '@/utills/formatedNumber';
import { FormData } from '@/utills/type';

const initialFormData: FormData = {
    id: '',
    name: '',
    DDD: '',
    number: '',
    email: '',
    group: '',
};

interface Props {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ loading, setLoading }: Props) => {
    const [typing, setTyping] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const isMobile = useMediaQuery('(max-width:758px)');
    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(fetchApi())
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const { contacts } = useSelector((state: RootState) => state.api);

    const listContacts = contacts ? Object.values(contacts) : [];

    listContacts.sort(Order);

    const filteredContacts = typing !== '' ? listContacts.filter((contact: ContactState) => contact?.name?.toLowerCase().includes(typing.toLowerCase())) : listContacts;

    const handleAdd = () => {
        dispatch(setSelectedContact(initialFormData));
        setShowModal(!showModal);
    };

    const handleSelected = (choice: ContactState) => {
        dispatch(setSelectedContact(choice));
        setShowContact(true);
    };

    const renderButtons = () => {
        if (isMobile) {
            return (
                <S.BoxButtons>
                    <AddIcon color="secondary" fontSize="large" style={{ marginRight: '10px' }} onClick={() => setShowModal(!showModal)} />
                    <SearchIcon color="secondary" fontSize="large" onClick={() => setShowSearch(!showSearch)} />
                </S.BoxButtons>
            );
        } else {
            return (
                <S.BoxButtons>
                    <S.Button onClick={handleAdd}>Adicionar contato</S.Button>
                    {listContacts.length > 0 && <S.Button onClick={() => setShowSearch(!showSearch)}>buscar contato</S.Button>}
                </S.BoxButtons>
            );
        }
    };

    const renderContactLine = (contact: ContactState) => {
        return (
            <S.ContactLine key={contact.name} onClick={() => handleSelected(contact)}>
                <S.BoxName>
                    <S.Letter>{contact.name?.substring(0, 1)}</S.Letter>
                    <S.Text>{contact.name}</S.Text>
                </S.BoxName>
                {!isMobile && <S.Text>{`(${(contact as unknown as FormData).DDD.replace(/\(|\)/g, '')}) ${formatPhoneNumber((contact as unknown as FormData).number)}`}</S.Text>}
            </S.ContactLine>
        );
    };

    return (
        <S.Container>
            {loading ? (
                <S.Wrapper>
                    <CircularProgress />
                </S.Wrapper>
            ) : (
                <>
                    {renderButtons()}
                    {showSearch && <Search setTyping={setTyping} />}
                    {filteredContacts.map(renderContactLine)}
                    {showModal && <Modal setLoading={setLoading} setShowModal={setShowModal} />}
                    {showContact && <Contact contacts={contacts as unknown as ContactState} setShowContact={setShowContact} setShowModal={setShowModal} />}
                </>
            )}
        </S.Container>
    );
};

export default Main;