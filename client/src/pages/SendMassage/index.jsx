import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import { CommentsBlock } from "../../components/CommentsBlock";

import styles from "./Login.module.scss";
import { fetchPosts, fetchPostsGet } from "../../redux/slisces/posts";

export const SendMassage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      phone: "",
      text: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchPosts(values));
    if (!data.payload) {
      return alert("Не удалось отправить сообщение");
    }
    dispatch(fetchPostsGet());
    return alert("Сообщение отправлено");
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Отправка сообщения
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Номер телефона"
          error={Boolean(errors.phone?.message)}
          helperText={errors.phone?.message}
          type="Номер телефона"
          {...register("phone", { required: "Укажите номер" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Сообщение"
          error={Boolean(errors.text?.message)}
          helperText={errors.text?.message}
          {...register("text", { required: "Напишите текст" })}
          fullWidth
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Отправить
        </Button>
      </form>

      <CommentsBlock>
      </CommentsBlock>

    </Paper>
  );
};
