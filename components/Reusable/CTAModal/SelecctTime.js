import { Radio, RadioGroup, FormControl, FormLabel } from "@chakra-ui/core";

const SelecctTime = React.forwardRef(({ label, name }, ref) => {
  return (
    <FormControl isRequired variantColor="primary" m="8px 0">
      <FormLabel htmlFor={name} fontSize="14px" color="#111">
        {label}
      </FormLabel>
      <RadioGroup
        name={name}
        defaultValue="Afternoon"
        spacing={5}
        isInline
        color="#111"
      >
        <Radio ref={ref} variantColor="green" value="Morning">
          Morning
        </Radio>
        <Radio ref={ref} variantColor="green" value="Afternoon">
          Afternoon
        </Radio>
        <Radio ref={ref} variantColor="green" value="Evening">
          Evening
        </Radio>
      </RadioGroup>
    </FormControl>
  );
});
export default SelecctTime;
