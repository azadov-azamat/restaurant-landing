import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { InputField } from "../custom/input";
import { Button } from "../custom/button";

type ContactFormValues = {
  name: string;
  phone: string;
  message: string;
};

// API simulation
async function sendContact(data: ContactFormValues) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>();

  const mutation = useMutation({
    mutationFn: sendContact,
    onSuccess: () => {
      alert("Ваше сообщение успешно отправлено!");
      reset();
    },
    onError: () => {
      alert("Произошла ошибка. Попробуйте еще раз.");
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="text-center text-black z-20">
        <h2 className="text-3xl my-8">Написать нам</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
        <InputField
            label="Имя"
            error={errors.name?.message}
            {...register("name", { required: "Введите имя" })}
        />

        <InputField
            label="Телефон"
            type="tel"
            error={errors.phone?.message}
            {...register("phone", { required: "Введите номер телефона" })}
        />

            <InputField
                label="Сообщение"
                type="textarea"
                error={errors.message?.message}
                {...register("message", { required: "Введите сообщение" })}
            />
        {/* Сообщение uchun oddiy textarea */}

        <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full"
        >
            {mutation.isPending ? "Отправка..." : "Отправить"}
        </Button>
        </form>
    </div>
  );
}
