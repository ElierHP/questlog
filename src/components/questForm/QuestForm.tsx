import styles from "./QuestForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../app/schema/questSchema";
import { useAppDispatch } from "../../app/hooks";
import { addQuest } from "../../app/features/questSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { setUrl } from "../../app/features/appSlice";

type FormData = {
  name: string;
  description: string;
};

export default function QuestForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  //   Submit adds a new quest to the global state.
  const onSubmit = (data: FormData) => {
    dispatch(
      addQuest({
        name: data.name,
        description: data.description,
        completed: false,
        id: uuidv4(),
      })
    );
    // Reroute to root page.
    navigate("/");
    dispatch(setUrl("/"));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Name Input */}
      <label htmlFor="name">Name</label>
      <input id="name " {...register("name")} />

      {/* Error Message */}
      {errors.name?.message && (
        <p className={styles.errorMsg}>{errors.name?.message}</p>
      )}

      {/* Description Input */}
      <label htmlFor="description">Description</label>
      <textarea
        {...register("description")}
        className={styles.description}
      ></textarea>

      {/* Error Message */}
      {errors.description?.message && (
        <p className={styles.errorMsg}>{errors.description?.message}</p>
      )}
      <button className="mt-2" type="submit">
        Add Quest
      </button>
    </form>
  );
}
