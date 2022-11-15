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
  checklist: string;
  checklist2: string;
  checklist3: string;
  checklist4: string;
  checklist5: string;
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
        checklist: [
          { name: data.checklist, checked: false, id: uuidv4() },
          { name: data.checklist2, checked: false, id: uuidv4() },
          { name: data.checklist3, checked: false, id: uuidv4() },
          { name: data.checklist4, checked: false, id: uuidv4() },
          { name: data.checklist5, checked: false, id: uuidv4() },
        ],
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

      {/* Checklist */}
      <label htmlFor="checklist">Requirements</label>
      <input id="checklist" {...register("checklist")} />
      <input id="checklist2" {...register("checklist2")} />
      <input id="checklist3" {...register("checklist3")} />
      <input id="checklist4" {...register("checklist4")} />
      <input id="checklist5" {...register("checklist5")} />

      <button className="mt-2" type="submit">
        Add Quest
      </button>
    </form>
  );
}
