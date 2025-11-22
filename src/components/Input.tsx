export default function Input({
  value,
  setValue,
  label,
  placeholder = "Type hier..."
}: {
  value: string;
  setValue: (value: string) => void;
  label?: string;
  placeholder?: string;
}) {
  const id = makeid(10);
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="border border-gray-300 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg p-2 mt-4 text-gray-900 dark:!text-white"
        placeholder={placeholder}
      />
    </>
  );
}

function makeid(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
