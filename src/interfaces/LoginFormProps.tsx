//assign type to props used in page

export interface LoginFormProps{
    user: string;
    handleUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password: string;
    handlePassChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}