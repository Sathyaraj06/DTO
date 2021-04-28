using System;
using System.Collections.Generic;
using System.Data.Entity.Spatial;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DTO.Model
{
    public class DtoParentObject
    {
        /// <Summary>
        /// Identifier property.
        /// </Summary>
        public long Id { get; set; }
        /// <Summary>
        /// Name of the parent object.
        /// </Summary>
        public string Name { get; set; }
        /// <Summary>
        /// Collection of DtoProperties object.
        /// </Summary>
        public List<DtoProperties> Datas { get; set; }
    }

    public class DtoProperties
    {
        /// <Summary>
        /// Sampling time of the properties.
        /// </Summary>
        public DateTime SamplingTime { get; set; }
        /// <Summary>
        /// Collection of DtoProperty object.
        /// </Summary>
        public List<DtoProperty> Properties { get; set; }
    }

    [KnownType(typeof(DbGeometry))]
    [KnownType(typeof(DtoQuantityValue))]
    public class DtoProperty
    {
        ///<Summary>
        /// Identifier property
        ///</Summary>
        public long Id { get; set; }
        ///<Summary>
        /// Holds the value for current property. Based on the PropertyType this holds the information.
        /// Say for example, If it is StringProperty, this holds the string value.
        ///</Summary>
        public object Value { get; set; }
        ///<Summary>
        /// A string value which indicates the label for the input field in   the UI.
        ///</Summary>
        public string Label { get; set; }
        ///<Summary>
        /// Indicates the current property type. Also, this is used to decide input field in the UI.
        /// Refer EntityPropertyDataType enum section for more information.
        ///</Summary>
        public EntityPropertyDataType PropertyType { get; set; }
    }

    public enum EntityPropertyDataType : byte
    {
        /// <Summary>
        /// If this is set on PropertyType of DtoProperty, UI should render the input (type = text) field and place the value.
        /// </Summary>
        StringProperty = 0,

        /// <Summary>
        /// If this is set on PropertyType of DtoProperty, UI should render the input (type = number) field and place the value. Also, display unit after the input field.
        /// </Summary>
        QuantityProperty = 1,
        /// <Summary>
        /// If this is set on PropertyType of DtoProperty, UI should render the input (type = number) field and place the value.
        /// </Summary>
        NumericProperty = 2,
        /// <Summary>
        /// If this is set on PropertyType of DtoProperty, UI should render a checkbox field and assign the value
        /// </Summary>
        BooleanProperty = 3,
        GeometryProperty = 4
    }

    public class DtoQuantityValue
    {
        /// <Summary>
        /// Quantity value
        /// </Summary>
        public double? Value { get; set; }
        /// <Summary>
        /// Quantity unit
        /// </Summary>
        public string Unit { get; set; }
    }

}
