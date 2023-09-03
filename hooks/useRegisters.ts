import { create } from 'zustand';


interface IRegisters {
    registers: {
        name: string;
        email: string;
    }[];
    addRegister: (name: string, email: string) => void;
    removeRegister: (name: string, email: string) => void;
};

const useRegister = create<IRegisters>((set) => ({
    registers: [],
    addRegister: (name: string, email: string) => set((state) => ({ registers: [...state.registers, { name, email }] })),
    removeRegister: (name: string, email: string) => set((state) => ({
        registers: state.registers.filter((register) => register.email !== email || register.name !== name)
    })),
}));

export default useRegister;
