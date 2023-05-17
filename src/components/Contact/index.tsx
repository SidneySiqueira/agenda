import React, { SetStateAction, useState } from 'react';
import * as S from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import Icons from '../../utills/Icons'
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { deleteApi } from '@/Redux/apiSlice';
import formatPhoneNumber from '@/utills/formatedNumber';
import formatDDD from '@/utills/formatedDDD';
import { ContactState } from '@/Redux/selectedContactSlice';
import { FormData } from '@/utills/type';

interface Props {
    contacts: ContactState
    setShowContact: React.Dispatch<SetStateAction<boolean>>
    setShowModal: React.Dispatch<SetStateAction<boolean>>
}

const Contact = ({ contacts, setShowContact, setShowModal }: Props) => {
    const [showAlert, setShowAlert]=useState(false)
    const selectContact: FormData | [] = useSelector((state: RootState) => state.selectContact.selectContact);

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handleEdit = () => {
        setShowContact(false);
        setShowModal(true);
    }
    const handleDelete = async (item: FormData) => {
        const contactsArray = contacts ? Object.entries(contacts) : [];
        const existingContact = contactsArray.find(([_, contact]) => contact.number === item.number);
        existingContact && await dispatch(deleteApi(existingContact[0]));
       
        setTimeout(() => {
            document.location.reload();
        }, 500);
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Close className="close" onClick={() => setShowContact(false)}>
                    X
                </S.Close>
                <S.BoxName>
                    <S.BoxImage>
                        <S.LogoPhoto src={'Icon_photo.png'} alt='photo' />
                    </S.BoxImage>
                    <S.Title>{(selectContact as FormData).name}</S.Title>
                </S.BoxName>
                <S.BoxGroup>
                    <S.TextGroup>Grupo</S.TextGroup>
                    <S.Group>{Icons((selectContact as FormData).group)} - {(selectContact as FormData).group ? (selectContact as FormData).group : 'Sem grupo'}</S.Group>
                </S.BoxGroup>
                <S.ContainerNumber>
                    <S.BoxNumber>
                        <S.Text>Numero</S.Text>
                        <S.Number>{`(${(selectContact as FormData).DDD.replace(/\(|\)/g, '')}) ${formatPhoneNumber((selectContact as FormData).number)}`}</S.Number>
                    </S.BoxNumber>
                    <S.LogoPhone src={'telefone.png'} alt='telefone' />
                </S.ContainerNumber> 
                {selectContact && (selectContact as FormData).email && (selectContact as FormData).email.length > 0 &&
                    <S.ContainerEmail>
                    <S.BoxNumber>
                        <S.Text>E-mail</S.Text>
                        <S.Email>{(selectContact as FormData).email}</S.Email>
                    </S.BoxNumber>
                </S.ContainerEmail>}
                <S.BoxButton>
                    <S.Edit onClick={handleEdit}>Editar</S.Edit>
                    <S.Delete onClick={()=> setShowAlert(true)}>Excluir</S.Delete>
                </S.BoxButton>
                {showAlert && 
                <S.Alert>
                    <S.TextAlert>Tem certeza que deseja apagar?</S.TextAlert>
                    <S.Yes onClick={()=> handleDelete((selectContact as FormData))}>Sim</S.Yes>
                    <S.No onClick={()=> setShowAlert(false)}>Cancelar</S.No>
                </S.Alert>}
            </S.Container>
        </S.Wrapper>
    );
};

export default Contact;
