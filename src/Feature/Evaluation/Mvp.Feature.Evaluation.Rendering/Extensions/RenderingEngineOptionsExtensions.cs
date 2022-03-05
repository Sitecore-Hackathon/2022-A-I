using Mvp.Feature.Evaluation.Rendering.Model;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mvp.Feature.Evaluation.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureEvaluation(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<EvaluationModel>("Evaluation");

            return options;
        }
    }
}
