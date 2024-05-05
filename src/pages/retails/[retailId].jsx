export const getServerSideProps = ({ query }) => ({
    props: {
      retailId: query.retailId,
    },
  })
  const RetailPage = ({ retailId }) => `Retail #${retailId}`
  
  export default RetailPage