"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import imageLogin from "../../../assets/images/Login-amico.svg";
import gualuImage from "../../../public/logo_gualu.png";
import Image from "next/image";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirigir automáticamente cuando la sesión esté activa
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Cambiar la ruta a la raíz o la ruta que desees
    }
  }, [status, router]);

  const handleSubmitLogin = async (data: LoginFormInputs) => {
    toast.promise(
      signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      }),
      {
        loading: "Intentando acceder...",
        error: "El correo o la contraseña son incorrectos",
        success(response) {
          router.push("/")
          return "Bienvenido a GualúCRM!";
        },
      }
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 rounded-xl grid grid-cols-2 gap-8 justify-center items-center">
        <div className="flex flex-col">
          <h2 className="font-normal text-3xl">
            <Image
              src={gualuImage}
              alt="Logo de Gualu"
              width={130}
              height={150}
            />
          </h2>
          <div className="flex flex-col mt-8">
            <p className="text-xl m-0">¡Bienvenido a Gualú CRM!</p>
            <p className="text-base text-gray-700 max-w-lg">
              Somos una plataforma para gestionar los contratos de Luz y Gas en
              España.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSubmitLogin)}
            className="flex flex-col gap-6 mt-4"
          >
            {/* Input de Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                {...register("email", {
                  required: "El correo electrónico es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Ingresa un correo válido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Input de Contraseña */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 4,
                    message: "La contraseña debe tener al menos 4 caracteres",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-4">
              <Button type="submit" className="bg-orange-500 text-white">
                Ingresar
              </Button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <Image src={imageLogin} alt="Imagen de inicio de sesión" />
        </div>
      </div>
    </div>
  );
};

export default Login;
