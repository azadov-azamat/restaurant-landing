import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { InputField } from "../custom/input";
import { Button } from "../custom/button";

type OrderFormValues = {
  phone: string;
  people: number;
  date: string;
  time: string;
  place: string;
};

// API simulation
async function submitOrder(data: OrderFormValues) {
  // bu joyda fetch yoki axios ishlatishingiz mumkin
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
}

export default function OrderForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormValues>();

  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (data) => {
      console.log("Order success:", data);
      alert("Buyurtma qabul qilindi!");
    },
    onError: (err) => {
      console.error("Order error:", err);
      alert("Xatolik yuz berdi!");
    },
  });

  const onSubmit = (data: OrderFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="md:w-[463px] w-full  rounded-3xl bg-white/50 backdrop-blur-[10px] text-center sm:px-14 px-10 sm:py-16 py-14">
        <h2 className="text-3xl my-8">Забронировать стол</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <InputField
                label="Ваш номер"
                error={errors.phone?.message}
                {...register("phone", { required: "Telefon raqam kerak" })}
            />

            <InputField
                label="На сколько человек?"
                error={errors.people?.message}
                {...register("people", { required: "Odam sonini kiriting" })}
            />

            <InputField
                // label="Выберите дату"
                type="date"
                error={errors.date?.message}
                {...register("date", { required: "Sanani tanlang" })}
            />

            <InputField
                label="Выберите время"
                type="time"
                error={errors.time?.message}
                {...register("time", { required: "Vaqtni tanlang" })}
            />

            <InputField
                label="Выберите место"
                error={errors.place?.message}
                {...register("place", { required: "Joyni kiriting" })}
            />

            <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full mt-8"
            >
                {mutation.isPending ? "Отправка..." : "Забронировать"}
            </Button>
        </form>
    </div>
  );
}
