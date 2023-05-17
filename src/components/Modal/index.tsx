import React, { SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/Redux/store';
import { AddApi, updateApi } from '@/Redux/apiSlice';
import Dropdown from '../Dropdown';
import * as S from "./styled";
import formatPhoneNumber from '@/utills/formatedNumber';
import formatDDD from '@/utills/formatedDDD';
import { ContactState } from '@/Redux/selectedContactSlice';
import { FormData } from '@/utills/type';

interface Props {
    setLoading: React.Dispatch<SetStateAction<boolean>>
    setShowModal: React.Dispatch<SetStateAction<boolean>>
}

const Modal = ({ setLoading, setShowModal }: Props) => {
    const { contacts } = useSelector((state: RootState) => state.api);
    const selectContact = useSelector((state: RootState) => state.selectContact.selectContact);
    const [formData, setFormData] = useState<FormData>(selectContact as FormData);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handlePost = async (array: ContactState) => {
        await dispatch(AddApi(array));
    };

    const handlePatch = async (id: string, patchData: ContactState) => {
        await dispatch(updateApi({ item: id, patchData: patchData }));
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (event: { target: { name: string; value: string; }; }) => {        
        if (typeof event === 'string') {
            setFormData({ ...formData, group: event });
        } else {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });
        }
    };

    const onSubmit = async () => {
        setLoading(true);

        if (!formData) {
            return;
        }

        const contactsArray = contacts ? Object.entries(contacts) : [];
        const existingContact = contactsArray?.find(([_, contact]) => {
            const { id } = contact;
            return (
                id === formData.id
            );
        });        
        if (existingContact) {
            await handlePatch(existingContact[0], formData as unknown as ContactState);
        } else {
            const newFormData = { ...formData, id: uuidv4() };
            await handlePost(newFormData as unknown as ContactState);
        }

        setShowModal(false);
        setTimeout(() => {
            document.location.reload();
        }, 500);
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Close className="close" onClick={handleCloseModal}>
                    X
                </S.Close>
                <S.Title>{formData.name === '' ? 'Adicionar Contato' : 'Editar Contato'}</S.Title>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.FormGroup>
                        <S.Atribute>Nome</S.Atribute>
                        <S.Input
                            type="text" {...register('name', { required: 'Necessário ter um nome' })}
                            value={formData.name}
                            onChange={handleInputChange}
                            maxLength={15}
                        />
                        {errors.name && <S.Error className="error">{errors.name.message}</S.Error>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>DDD</S.Atribute>
                        <S.Input
                            type="text" {...register('DDD', { required: 'Necessário ter um DDD' })}
                            value={formatDDD(formData.DDD)}
                            onChange={handleInputChange}
                            maxLength={3}
                        />
                        {errors.DDD && <S.Error className="error">{errors.DDD.message}</S.Error>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Numero</S.Atribute>
                        <S.Input
                            type="text" {...register('number', { required: 'Necessário ter um numero' })}
                            value={formatPhoneNumber(formData.number)}
                            onChange={handleInputChange}
                            maxLength={11}
                        />
                        {errors.number && <S.Error className="error">{errors.number.message}</S.Error>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Email</S.Atribute>
                        <S.Input
                            type="email" {...register('email')}
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Grupo</S.Atribute>
                        <Dropdown group={formData.group} handleInputChange={handleInputChange as unknown as (event: string) => void} />
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Add type="submit">Salvar</S.Add>
                        <S.Cancel type="button" onClick={handleCloseModal}>
                            Cancelar
                        </S.Cancel>
                    </S.FormGroup>
                </S.Form>
            </S.Container>
        </S.Wrapper>
    );
};

export default Modal;
