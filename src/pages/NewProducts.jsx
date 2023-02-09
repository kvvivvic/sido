import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Loading from "../component/ui/Loading";
import Success from "../component/ui/Success";
import useProducts from "../hooks/useProducts";

const NewProdcts = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess(() => <Success />);
              setTimeout(() => {
                setSuccess(null);
              }, 100000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section className="w-full text-center mt-24">
      <h2 className="text-2xl font-bold mt-6 mb-12 border-b-2 border-black inline-block py-4">새로운 제품 등록</h2>
      {success && <p className="my-2">{success}</p>}
      {file && <img className="w-96 mx-auto my-4" src={URL.createObjectURL(file)} alt="local file" />}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="file" required onChange={handleChange} />
        <input type="text" name="category" value={product.category ?? ""} placeholder="카테고리" required onChange={handleChange} />
        <input type="text" name="title" value={product.title ?? ""} placeholder="제품명" required onChange={handleChange} />
        <input type="number" name="price" value={product.price ?? ""} placeholder="가격" required onChange={handleChange} />
        <input type="text" name="description" value={product.description ?? ""} placeholder="제품설명" onChange={handleChange} />
        <input type="text" name="options" value={product.options ?? ""} placeholder="옵션들(콤마(,)로 구분)" required onChange={handleChange} />
        <button className="border-indigo-400 h-12 w-36 rounded-lg mt-8 text-white inline-block font-bold bg-indigo-400" disabled={isUploading}>
          제품 등록하기
        </button>
        {isUploading && <Loading />}
      </form>
    </section>
  );
};

export default NewProdcts;
