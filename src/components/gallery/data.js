import React, { useState } from "react";

import image11 from "../../assets/images/1/1.jpg";
import image12 from "../../assets/images/1/2.jpg";

import image21 from "../../assets/images/2/1.jpg";
import image22 from "../../assets/images/2/2.jpg";
import image23 from "../../assets/images/2/3.jpg";
import image24 from "../../assets/images/2/4.jpg";
import image25 from "../../assets/images/2/5.jpg";
import image26 from "../../assets/images/2/6.jpg";

import image31 from "../../assets/images/3/1.jpg";

import image41 from "../../assets/images/4/1.jpg";
import image42 from "../../assets/images/4/2.jpg";
import image43 from "../../assets/images/4/3.jpg";
import image44 from "../../assets/images/4/4.jpg";
import image45 from "../../assets/images/4/5.jpg";
import image46 from "../../assets/images/4/6.jpg";
import image47 from "../../assets/images/4/7.jpg";
import image48 from "../../assets/images/4/8.jpg";
import image49 from "../../assets/images/4/9.jpg";
import image410 from "../../assets/images/4/10.jpg";
import image411 from "../../assets/images/4/11.jpg";

const Data = () => {
  const [images, setImages] = useState([
    {
      image: image11,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Lahan Kopi Kab. Bener Meriah",
    },
    {
      image: image12,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Lahan Kopi Kab. Bener Meriah",
    },

    {
      image: image21,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Persawahan Kab. Aceh Barat Daya",
    },
    {
      image: image22,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Persawahan Kab. Aceh Barat Daya",
    },
    {
      image: image23,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Persawahan Kab. Aceh Barat Daya",
    },
    {
      image: image24,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Persawahan Kab. Aceh Barat Daya",
    },
    {
      image: image25,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Persawahan Kab. Aceh Barat Daya",
    },
    {
      image: image26,
      label:
        "Kegiatan demplot dengan pupuk cair Surbio Organik di Persawahan Kab. Aceh Barat Daya",
    },

    {
      image: image31,
      label: "Kegiatan Pendistibusian Pupuk Cair Subio Organik",
    },

    {
      image: image41,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
    {
      image: image43,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
    {
      image: image45,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
    {
      image: image47,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
    {
      image: image48,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
    {
      image: image49,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
    {
      image: image411,
      label: "Kegiatan Team Surbio Organik Dengan Lembaga atau Instansi",
    },
  ]);

  return { images };
};

export default Data;
