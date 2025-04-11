import { useDebounce } from "./useDebounse";

const fetch = (value: string) => {
  console.log(value);
};
export const Debounce = () => {
  const debounce = useDebounce(fetch, 1000);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounce(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};
