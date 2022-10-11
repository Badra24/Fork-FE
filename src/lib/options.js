export const sortOptions = [
    {
      value: "relevance",
      label: "Relevance",
      order: "",
      orderby: "",
    },
    {
      value: "pricedesc",
      label: "Highest Price",
      order: "DESC",
      orderby: "price" ,
    },
    {
      value: "priceasc",
      label: "Lowest Price",
      order: "ASC",
      orderby: "price",
    },
    // {
    //   value: "pricedesc",
    //   label: "Highest Price",
    //   order: "DESC",
    //   orderby: "total penjualan" ,
    // },
    {
      value: "createdAtdesc",
      label: "dateDown",
      order: "DESC",
      orderby: "createdAt" ,
    },
    {
      value: "createdAtasc",
      label: "dateUp",
      order: "ASC",
      orderby: "createdAt" ,
    },

    { value: "nameasc", label: "A-Z", order: "ASC", orderby: "name" },
    { value: "namedesc", label: "Z-A", order: "DESC", orderby: "name" },
  ];
  