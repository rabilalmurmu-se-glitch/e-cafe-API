export interface ResponseProps {
  success: boolean;
  error: boolean;
  data: any;
  message: string;
  details: any;
}
export const ResponsePayload: (props: ResponseProps) => ResponseProps = (
  props: ResponseProps
) => {
  const resp: ResponseProps = {
    success: props.success,
    error: props.error,
    data: props.data,
    message: props.message,
    details: props.details,
  };
  return resp;
};
